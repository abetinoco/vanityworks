#!/bin/bash
cd "$(dirname "$0")"
echo "=== VanityWorks — Clean Dev Start ==="
echo "Killing any process on port 3002..."
lsof -ti :3002 | xargs kill -9 2>/dev/null && echo "✅ Killed process on 3002" || echo "ℹ️  Nothing on 3002"
echo "Clearing .next build cache..."
rm -rf .next
echo "✅ .next cleared"
echo "Starting dev server..."
npm run dev
