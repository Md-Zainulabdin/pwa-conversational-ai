"use client";

import React, { useCallback, useState } from "react";
import { VoiceChatProps } from "@/types/voice";
import { useConversation } from "@11labs/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AIAvatar } from "@/components/ai-avatar";
import { Mic, MicOff } from 'lucide-react';

export function VoiceChat({ onStart, isListening }: VoiceChatProps) {
  const conversation = useConversation();
  const { status, isSpeaking } = conversation;
  const [errorMessage, setErrorMessage] = useState("");

  const handleStartConversation = useCallback(async () => {
    try {
      await onStart();
      // Replace with your actual agent ID or URL
      const conversationId = await conversation.startSession({
        agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID!,
      });
      console.log("Started conversation:", conversationId);
    } catch (error) {
      setErrorMessage("Failed to start conversation");
      console.error("Error starting conversation:", error);
    }
  }, [onStart, conversation]);

  return (
    <Card className="w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
      <CardContent className="p-6 space-y-6">
        <AIAvatar isSpeaking={isSpeaking} />

        <Button
          variant="default"
          className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:opacity-90 transition-all duration-300 text-white font-medium py-6"
          onClick={handleStartConversation}
        >
          {isListening ? (
            <>
              <MicOff className="mr-2 h-5 w-5" />
              Stop Listening
            </>
          ) : (
            <>
              <Mic className="mr-2 h-5 w-5" />
              Start Conversation
            </>
          )}
        </Button>

        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
      </CardContent>
    </Card>
  );
}

