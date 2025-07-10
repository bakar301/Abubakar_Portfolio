# Adding Your Personal Photo to Portfolio

## Quick Instructions

To add your personal photo to the portfolio:

1. **Prepare your photo:**
   - Take a professional headshot photo
   - Crop it to a square (1:1 ratio)
   - Recommended size: 400x400 pixels minimum
   - Save as JPG or PNG format

2. **Add photo to project:**
   - Name your photo file: `abu-bakar-photo.jpg`
   - Place it in the `client/public/` folder
   - The path should be: `client/public/abu-bakar-photo.jpg`

3. **That's it!**
   - Your photo will automatically appear in:
     - Hero section (circular profile photo)
     - About section (larger portrait)
   - If no photo is found, it uses a professional placeholder

## Project Images
To add screenshots of your projects:

1. **ObjectIQ Project:**
   - Add image to: `client/public/projects/objectiq.jpg`
   - Should show your ObjectIQ application interface

2. **Pomodoro Timer Project:**
   - Add image to: `client/public/projects/pomodoro-timer.jpg`
   - Should show your Pomodoro Timer application interface

3. **Image Requirements:**
   - Recommended size: 800x400 pixels
   - Format: JPG or PNG
   - Clear screenshots of your applications

## File Structure
```
abu-bakar-portfolio/
├── client/
│   ├── public/
│   │   ├── abu-bakar-photo.jpg  ← Put your photo here
│   │   └── projects/
│   │       ├── objectiq.jpg  ← ObjectIQ screenshot
│   │       └── pomodoro-timer.jpg  ← Pomodoro Timer screenshot
│   └── src/
└── ...
```

## Photo Tips
- Use good lighting
- Professional attire
- Clear background
- Smile naturally
- Look directly at camera
- High resolution (at least 400x400)

The portfolio will automatically use your photo once you add it to the public folder!