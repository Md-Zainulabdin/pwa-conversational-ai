"use client";

import { useState, useCallback } from "react";
import { useMicrophone } from "@/hooks/useMicrophone";
import  {VoiceChat}  from "@/components/voice-chat";
import { MicrophoneNotice } from "@/components/microphone-notice";
import { Heading } from "@/components/ui/heading";

export default function Home() {
  const { hasAccess, requestAccess } = useMicrophone();
  const [isListening, setIsListening] = useState(false);

  const handleStart = useCallback(async () => {
    if (!hasAccess) {
      const accessGranted = await requestAccess();
      if (accessGranted) {
        setIsListening(true);
      }
    } else {
      setIsListening(!isListening);
    }
  }, [hasAccess, requestAccess, isListening]);

  if (!hasAccess) {
    requestAccess();
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="space-y-8 px-4">
        <Heading
          title="Realtime Voice Agent"
          subtitle="Powered by ElevenLabs"
        />

        <VoiceChat isListening={isListening} onStart={handleStart} />

        <MicrophoneNotice hasAccess={hasAccess} />
      </div>

    </main>
  );
}
