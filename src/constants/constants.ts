// This file contains constants used throughout the vscode-openai extension.

// VSCODE_OPENAI_EXTENSION: Contains the command ID for extension activation.
// Input: None
// Output: A string representing the command ID for registering the OpenAI service.
export const VSCODE_OPENAI_EXTENSION = {
  INSTRUMENTATION_KEY: 'e01c0a97-9930-4885-b2e8-772176ced488',
  ENABLED_COMMAND_ID: 'vscode-openai.extension.enabled',
  SETTINGS_PROMPT_EDIT_COMMAND_ID: 'vscode-openai.settings.prompt-editor',
}

// VSCODE_OPENAI_REGISTER: Contains the command ID for registering the OpenAI service.
// Input: None
// Output: A string representing the command ID for registering the OpenAI service.
export const VSCODE_OPENAI_REGISTER = {
  SERVICE_COMMAND_ID: 'vscode-openai.register.openaiService',
}

// VSCODE_OPENAI_SCM: Contains the command ID for commenting on a change in source control management.
// Input: None
// Output: A string representing the command ID for commenting on a change in source control management.
export const VSCODE_OPENAI_SCM = {
  ENABLED_COMMAND_ID: 'vscode-openai.scm.enabled',
  COMMENT_COMMAND_ID: 'vscode-openai.scm.comment',
}

// VSCODE_OPENAI_EMBEDDING: Contains the command ID for deleting embedding results.
// Input: None
// Output: A string representing the command ID for commenting on a change in source control management.
export const VSCODE_OPENAI_EMBEDDING = {
  ENABLED_COMMAND_ID: 'vscode-openai.embedding.enabled',
  SETUP_REQUIRED_COMMAND_ID: 'vscode-openai.embedding.setup-required',
  STORAGE_V1_ID: 'embedding.v1',

  CONVERSATION_ALL_COMMAND_ID: 'vscode-openai.embedding.conversation-all',
  INDEX_FILE_COMMAND_ID: 'vscode-openai.embedding.index-file',
  INDEX_FOLDER_COMMAND_ID: 'vscode-openai.embedding.index-folder',
  INDEX_WEB_COMMAND_ID: 'vscode-openai.embedding.index-web',
  REFRESH_COMMAND_ID: 'vscode-openai.embedding.refresh',
  CONVERSATION_COMMAND_ID: 'vscode-openai.embedding.conversation',
  DELETE_COMMAND_ID: 'vscode-openai.embedding.delete',
}

// VSCODE_OPENAI_EMBEDDING: Contains the command ID for deleting embedding results.
// Input: None
// Output: A string representing the command ID for commenting on a change in source control management.
export const VSCODE_OPENAI_CONVERSATION = {
  STORAGE_V1_ID: 'conversation',
  NEW_STANDARD_COMMAND_ID: 'vscode-openai.conversation.new-standard',
  NEW_PERSONA_COMMAND_ID: 'vscode-openai.conversation.new-persona',
  REFRESH_COMMAND_ID: 'vscode-openai.conversation.refresh',
  DELETE_ALL_COMMAND_ID: 'vscode-openai.conversation.delete-all',
}

// VSCODE_OPENAI_PROMPT: Contains various command IDs for prompting OpenAI to complete tasks.
// Input: None
// Output: An object containing strings representing various command IDs for prompting OpenAI to complete tasks.
export const VSCODE_OPENAI_PROMPT = {
  PROMPT_COMMENTS_COMMAND_ID: 'vscode-openai.prompt-editor.comment',
  PROMPT_EXPLAIN_COMMAND_ID: 'vscode-openai.prompt-editor.explain',
  PROMPT_BOUNTY_COMMAND_ID: 'vscode-openai.prompt-editor.bounty',
  PROMPT_OPTIMIZE_COMMAND_ID: 'vscode-openai.prompt-editor.optimize',
  PROMPT_PATTERNS_COMMAND_ID: 'vscode-openai.prompt-editor.patterns',
}

// VSCODE_OPENAI_SIDEBAR: Contains various command IDs for opening webviews in the sidebar of VS Code.
// Input: None
// Output: An object containing strings representing various command IDs for opening webviews in the sidebar of VS Code.
export const VSCODE_OPENAI_SIDEBAR = {
  CONVERSATIONS_COMMAND_ID: 'vscode-openai.sidebar.conversationsWebview',
  EMBEDDING_COMMAND_ID: 'vscode-openai.sidebar.embedding',
}
