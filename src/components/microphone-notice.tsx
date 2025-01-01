import { MicrophoneAccessProps } from "@/types/voice";

export function MicrophoneNotice({ hasAccess }: MicrophoneAccessProps) {
  return (
    <p className="text-sm text-gray-500 text-center">
      {hasAccess
        ? "Microphone access granted. You can start the conversation."
        : "The app requires microphone access to work."}
    </p>
  );
}
