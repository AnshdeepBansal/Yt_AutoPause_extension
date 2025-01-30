# Youtube AutoPause Extension

AutoPause YouTube is a **Chrome extension** that **automatically pauses** a YouTube video when you switch to another tab and **resumes playback** when you return. This ensures you never miss a moment of your video while multitasking.

## Features
- **Automatic Pause & Play**: The video pauses when you switch tabs and resumes when you return.
- **Seamless Integration**: Works automatically with **YouTube** without any manual interaction.
- **Lightweight & Efficient**: Runs in the background without consuming unnecessary resources.

## Installation
1. **Download or Clone** this repository:
   ```bash
   git clone https://github.com/yourusername/autopause-youtube.git
   ```
2. Open **Google Chrome** and go to `chrome://extensions/`
3. Enable **Developer Mode** (toggle at the top right corner).
4. Click **Load unpacked** and select the cloned or extracted folder.
5. The extension will be added to Chrome and start working automatically.

## Usage
- Open **YouTube** and play any video.
- Switch to another tab → The video **pauses** automatically.
- Return to the YouTube tab → The video **resumes** automatically.

## How It Works
- The extension listens for **visibility change events** in the browser.
- When the YouTube tab loses focus, the script **pauses** the video.
- When you return, it **resumes** playback.

## Permissions
This extension requires the following permissions:
- **Active Tab**: To detect when the YouTube tab is active or inactive.

## Contributing
Feel free to **fork** the repository, submit **pull requests**, or suggest **improvements**!

## License
This project is licensed under the **MIT License**.

---
🚀 **Enjoy distraction-free YouTube watching with AutoPause YouTube!**
