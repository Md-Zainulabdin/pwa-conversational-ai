export interface VoiceChatProps {
  onStart: () => Promise<void>;
  isListening?: boolean;
}

export interface MicrophoneAccessProps {
  hasAccess: boolean;
  requestAccess?: () => Promise<void>;
}
