# Project Images Setup Guide

## Project Images Folder Structure

I've created a dedicated folder for your project screenshots:

```
abu-bakar-portfolio/
├── client/
│   ├── public/
│   │   ├── projects/                    ← Project images folder
│   │   │   ├── objectiq.jpg            ← ObjectIQ app screenshot
│   │   │   ├── pomodoro-timer.jpg      ← Pomodoro Timer app screenshot
│   │   │   └── number-guessing-game.jpg ← Number Guessing Game screenshot
│   │   └── abu-bakar-photo.jpg         ← Your personal photo
│   └── src/
└── ...
```

## How to Add Your Project Images

### 1. **ObjectIQ Project Image**
- File name: `objectiq.jpg`
- Location: `client/public/projects/objectiq.jpg`
- Recommended: Screenshot of your app interface, AI results, or food recognition in action
- Size: 800x400 pixels (16:9 aspect ratio) for best display

### 2. **Pomodoro Timer Project Image**
- File name: `pomodoro-timer.jpg`
- Location: `client/public/projects/pomodoro-timer.jpg`
- Recommended: Screenshot of timer interface, mobile app screens
- Size: 800x400 pixels (16:9 aspect ratio)

### 3. **Number Guessing Game Project Image**
- File name: `number-guessing-game.jpg`
- Location: `client/public/projects/number-guessing-game.jpg`
- Recommended: Screenshot of terminal/console with game running, or code snippet
- Size: 800x400 pixels (16:9 aspect ratio)

## Image Tips for Best Results

### **For Mobile Apps (ObjectIQ & Pomodoro Timer):**
- Use phone mockups showing your app interface
- Multiple screens in one image (before/after, different features)
- Show the app in action with real data
- Use tools like Figma, Canva, or phone mockup generators

### **For Code Projects (Number Guessing Game):**
- Terminal screenshot showing game running
- Code editor with key parts of your code
- Split screen: code + terminal output
- Use syntax highlighting for better visuals

### **General Guidelines:**
- **Format:** JPG or PNG
- **Resolution:** At least 800x400 pixels
- **Aspect Ratio:** 16:9 (landscape orientation)
- **File Size:** Keep under 1MB for fast loading
- **Quality:** High resolution but web-optimized

## Automatic Fallback System

✅ **Smart Image Loading:**
- Portfolio first tries to load your custom images
- If image not found, automatically shows professional placeholders
- No broken images ever displayed
- Works perfectly even without custom images

## Quick Setup Steps

1. **Create screenshots** of your projects
2. **Resize to 800x400** pixels (recommended)
3. **Save with correct names:**
   - `objectiq.jpg`
   - `pomodoro-timer.jpg` 
   - `number-guessing-game.jpg`
4. **Place in** `client/public/projects/` folder
5. **Done!** Images automatically appear in portfolio

## Tools for Creating Project Images

### **Screenshot Tools:**
- Snipping Tool (Windows)
- Screenshot (Mac: Cmd+Shift+4)
- Lightshot, Greenshot

### **Phone Mockups:**
- Figma (free)
- Canva (free templates)
- MockuPhone.com
- Smartmockups.com

### **Image Editing:**
- GIMP (free)
- Photoshop
- Canva
- Figma

The portfolio is already set up to automatically use your images once you add them to the projects folder!