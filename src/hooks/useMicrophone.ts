"use client";

import { useState, useCallback } from "react";

export function useMicrophone() {
  const [hasAccess, setHasAccess] = useState(false);

  const requestAccess = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop());
      setHasAccess(true);
      return true;
    } catch (error) {
      console.error("Error accessing microphone:", error);
      return false;
    }
  }, []);

  return {
    hasAccess,
    requestAccess,
  };
}
