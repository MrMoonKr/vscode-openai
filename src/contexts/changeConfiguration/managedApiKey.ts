import { waitFor } from '@app/utilities/node'
import {
  ConfigurationSettingService,
  enableServiceFeature,
} from '@app/services'
import { verifyApiKey } from '@app/utilities/openai'

export class ManagedApiKey {
  private static instance: ManagedApiKey
  private _isQueued = false

  public static getInstance(): ManagedApiKey {
    if (!ManagedApiKey.instance) {
      ManagedApiKey.instance = new ManagedApiKey()
    }
    return ManagedApiKey.instance
  }

  public async verify(): Promise<void> {
    if (this._isQueued === true) return

    this._isQueued = true
    await waitFor(500, () => false)
    await verifyApiKey()
    enableServiceFeature()
    ConfigurationSettingService.LogConfigurationService()
    this._isQueued = false
  }
}
