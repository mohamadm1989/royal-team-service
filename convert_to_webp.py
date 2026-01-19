from PIL import Image
import os

images_to_convert = [
    "hero-bg-final.png",
    "logo-transparent-final.png"
]

public_dir = r"c:\Users\Mohamad\Downloads\royal-team-service\public"

for img_name in images_to_convert:
    input_path = os.path.join(public_dir, img_name)
    output_path = os.path.join(public_dir, os.path.splitext(img_name)[0] + ".webp")
    
    if os.path.exists(input_path):
        try:
            with Image.open(input_path) as img:
                img.save(output_path, "WEBP", quality=85)
            print(f"Successfully converted {img_name} to WebP.")
        except Exception as e:
            print(f"Error converting {img_name}: {e}")
    else:
        print(f"File not found: {input_path}")
