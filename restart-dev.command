#!/bin/bash
cd "$(dirname "$0")"
echo "=== Restarting VanityWorks dev server ==="
echo "Killing any process on port 3002..."
lsof -ti :3002 | xargs kill -9 2>/dev/null && echo "✅ Killed process on 3002" || echo "ℹ️  Nothing on 3002"
sleep 1
echo "Starting fresh dev server..."
npm run dev
