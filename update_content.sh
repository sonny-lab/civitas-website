#!/bin/bash

echo "=== Civitas Content Update Script ==="
echo ""

# Navigate to the project directory
cd /home/ubuntu/politicraft-website

echo "📁 Content directories:"
echo "  Blog posts: /home/ubuntu/politicraft-website/content/blog/"
echo "  Development updates: /home/ubuntu/politicraft-website/content/development/"
echo ""

echo "📝 To add new content:"
echo "  1. Create a new .md file in the appropriate content directory"
echo "  2. Use the following format for blog posts:"
echo ""
echo "     ---"
echo "     title: \"Your Post Title\""
echo "     date: \"Month Year\""
echo "     excerpt: \"Brief description of your post.\""
echo "     ---"
echo ""
echo "     # Your Post Title"
echo "     Your content here in Markdown format..."
echo ""
echo "  3. For development updates, use:"
echo ""
echo "     ---"
echo "     title: \"Update Title\""
echo "     status: \"In Progress\" or \"Planning\" or \"Completed\""
echo "     description: \"Brief description of the update.\""
echo "     ---"
echo ""
echo "     # Update Title"
echo "     Detailed content here..."
echo ""

echo "🔧 Building the website..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ Website built successfully!"
    echo ""
    echo "📦 Next steps:"
    echo "  1. Notify the agent to package and publish the updated website"
    echo "  2. Click the 'Publish' button when it appears in your UI"
    echo "  3. Your updated content will be live at: https://civitas-mcnzj9.manus.space/"
else
    echo "❌ Build failed. Please check for errors above."
fi

