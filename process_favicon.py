from PIL import Image
import os

def add_bg_and_save(input_path, output_path, bg_color=(30, 41, 59), size=(512, 512), padding=40):
    """
    Adds a solid background color to a PNG icon.
    bg_color: RGB tuple. (30, 41, 59) is #1e293b (Slate-800/Slate-bg)
    """
    if not os.path.exists(input_path):
        print(f"File not found: {input_path}")
        return

    with Image.open(input_path) as img:
        # Create a solid background canvas
        bg = Image.new("RGB", size, bg_color)
        
        # Resize logo to fit inside with some padding
        icon_size = (size[0] - padding*2, size[1] - padding*2)
        img.thumbnail(icon_size, Image.Resampling.LANCZOS)
        
        # Center the logo
        offset = ((size[0] - img.size[0]) // 2, (size[1] - img.size[1]) // 2)
        
        # If logo has alpha channel, use it as mask
        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
            bg.paste(img, offset, img.convert('RGBA'))
        else:
            bg.paste(img, offset)
            
        bg.save(output_path, "PNG")
        print(f"Successfully created: {output_path}")

# Site Background: #1e293b (30, 41, 59)
# Deep Navy: #0f172a (15, 23, 42)

public_dir = r"c:\Users\Mohamad\Downloads\royal-team-service\public"
logo_path = os.path.join(public_dir, "logo-new.png")

# 1. Create Favicon (Small Square)
add_bg_and_save(logo_path, os.path.join(public_dir, "favicon-v4.png"), bg_color=(30, 41, 59), size=(512, 512), padding=60)

# 2. Create OG Image (Social Media - 1200x630)
# For OG Image, we might want it wider or keeping the simple logo
add_bg_and_save(logo_path, os.path.join(public_dir, "og-image-v4.png"), bg_color=(30, 41, 59), size=(1200, 630), padding=150)
