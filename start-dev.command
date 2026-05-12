#!/bin/bash
cd "$(dirname "$0")"
echo "Starting VanityWorks dev server on :3001..."
PORT=3001 npm run dev -- --hostname 0.0.0.0
