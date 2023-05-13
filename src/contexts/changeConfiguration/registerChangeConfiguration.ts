import { ExtensionContext, workspace } from 'vscode'
import { ManagedApiKey } from './managedApiKey'
import { handleError } from '@app/utilities/node'

export function registerChangeConfiguration(context: ExtensionContext): void {
  try {
    const managedApiKeyInstance = ManagedApiKey.getInstance()
    const eventAffectsConfigurations = [
      'vscode-openai.serviceProvider',
      'vscode-openai.authentication',
      'vscode-openai.baseUrl',
      'vscode-openai.defaultModel',
      'vscode-openai.azureDeployment',
      'vscode-openai.azureApiVersion',
    ]

    workspace.onDidChangeConfiguration(async (event) => {
      if (
        eventAffectsConfigurations.some((config) =>
          event.affectsConfiguration(config)
        )
      ) {
        await managedApiKeyInstance.verify()
      }
    })
  } catch (error) {
    handleError(error)
  }
}
