from PIL import Image
import os

images_to_convert = [
    "hero-bg-final.png",
    "logo-new.png"
]

public_dir = r"c:\Users\Mohamad\Downloads\royal-team-service\public"

for img_name in images_to_convert:
    input_path = os.path.join(public_dir, img_name)
    output_path = os.path.join(public_dir, os.path.splitext(img_name)[0] + ".webp")
    
    if os.path.exists(input_path):
        try:
            with Image.open(input_path) as img:
                # Resize logo if it's the logo file
                if "logo" in img_name.lower():
                    # Resize to 200px width while maintaining aspect ratio
                    w_percent = (200 / float(img.size[0]))
                    h_size = int((float(img.size[1]) * float(w_percent)))
                    img = img.resize((200, h_size), Image.Resampling.LANCZOS)
                    print(f"Resized {img_name} to 200px width.")
                
                # Higher compression for Hero bg - quality 60 is usually still great for WebP
                quality = 60 if "hero" in img_name.lower() else 75
                img.save(output_path, "WEBP", quality=quality, method=6)
            print(f"Successfully converted {img_name} to WebP with quality {quality}.")
        except Exception as e:
            print(f"Error converting {img_name}: {e}")
    else:
        print(f"File not found: {input_path}")
