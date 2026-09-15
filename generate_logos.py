import os
from PIL import Image, ImageDraw, ImageFont

# Ensure directory exists
os.makedirs("public/assets", exist_ok=True)

def draw_logo_mark(draw, offset_x, offset_y, size):
    """
    Draws the sun/cross/open-book logo mark inside a square boundary.
    size: bounding box dimension (e.g. 400)
    """
    cx = offset_x + size / 2
    cy = offset_y + size / 2
    
    # 1. Sun Rays (Radiant warmth behind/above the book)
    gold = (253, 186, 45, 255)     # #FDBA2D
    gold_light = (255, 220, 110, 220)
    blue = (46, 134, 193, 255)     # #2E86C1
    green = (63, 163, 77, 255)     # #3FA34D
    ink = (30, 42, 56, 255)        # #1E2A38
    white = (255, 255, 255, 255)

    # Draw sun rays spreading upwards
    num_rays = 9
    ray_center_y = cy - size * 0.05
    for i in range(num_rays):
        angle_deg = -140 + (280 / (num_rays - 1)) * i
        import math
        rad = math.radians(angle_deg)
        r_inner = size * 0.15
        r_outer = size * 0.42
        
        x1 = cx + r_inner * math.cos(rad)
        y1 = ray_center_y + r_inner * math.sin(rad)
        x2 = cx + r_outer * math.cos(rad)
        y2 = ray_center_y + r_outer * math.sin(rad)
        
        # Draw ray pill/line
        ray_width = max(6, int(size * 0.035))
        draw.line([(x1, y1), (x2, y2)], fill=gold if i % 2 == 0 else gold_light, width=ray_width)
    
    # Sun central glow circle
    glow_r = size * 0.18
    draw.ellipse([cx - glow_r, ray_center_y - glow_r, cx + glow_r, ray_center_y + glow_r], fill=gold)

    # 2. Open Book pages forming a path forward
    book_base_y = cy + size * 0.15
    book_w = size * 0.76
    book_h = size * 0.28
    
    # Left page (Blue curve)
    left_points = [
        (cx, book_base_y - size * 0.02),
        (cx - book_w * 0.45, book_base_y - size * 0.12),
        (cx - book_w * 0.48, book_base_y + book_h * 0.6),
        (cx - size * 0.04, book_base_y + book_h * 0.8),
        (cx, book_base_y + size * 0.1)
    ]
    draw.polygon(left_points, fill=blue)
    
    # Right page (Green curve - path motif)
    right_points = [
        (cx, book_base_y - size * 0.02),
        (cx + book_w * 0.45, book_base_y - size * 0.12),
        (cx + book_w * 0.48, book_base_y + book_h * 0.6),
        (cx + size * 0.04, book_base_y + book_h * 0.8),
        (cx, book_base_y + size * 0.1)
    ]
    draw.polygon(right_points, fill=green)
    
    # Page highlight overlay lines (creating path depth)
    draw.line([(cx, book_base_y - size * 0.02), (cx - size * 0.35, book_base_y - size * 0.08)], fill=(255, 255, 255, 180), width=4)
    draw.line([(cx, book_base_y - size * 0.02), (cx + size * 0.35, book_base_y - size * 0.08)], fill=(255, 255, 255, 180), width=4)

    # 3. Cross in the center standing at the light
    cross_w = size * 0.065
    cross_h = size * 0.36
    cross_y = cy - size * 0.18
    
    # Cross vertical stem
    draw.rectangle([cx - cross_w / 2, cross_y, cx + cross_w / 2, cross_y + cross_h], fill=ink)
    # Cross horizontal bar
    bar_y = cross_y + cross_h * 0.28
    bar_w = size * 0.22
    draw.rectangle([cx - bar_w / 2, bar_y, cx + bar_w / 2, bar_y + cross_w], fill=ink)

    # Outline cross highlight in white/gold for crisp contrast
    draw.rectangle([cx - cross_w / 2 + 2, cross_y + 2, cx + cross_w / 2 - 2, cross_y + cross_h - 2], fill=white)
    draw.rectangle([cx - bar_w / 2 + 2, bar_y + 2, cx + bar_w / 2 - 2, bar_y + cross_w - 2], fill=white)


# --- 1. Generate logo-icon.png ---
icon_dim = 400
img_icon = Image.new("RGBA", (icon_dim, icon_dim), (0, 0, 0, 0))
draw_icon = ImageDraw.Draw(img_icon)
draw_logo_mark(draw_icon, 0, 0, icon_dim)
img_icon.save("public/assets/logo-icon.png", "PNG")
print("Saved public/assets/logo-icon.png")

# --- 2. Generate logo-horizontal.png ---
h_width, h_height = 1000, 260
img_h = Image.new("RGBA", (h_width, h_height), (0, 0, 0, 0))
draw_h = ImageDraw.Draw(img_h)

# Draw mark on the left
draw_logo_mark(draw_h, 10, 10, 240)

# Draw text on the right
# Try loading system font, or default to crisp drawn text
try:
    font_title = ImageFont.truetype("/System/Library/Fonts/Supplemental/Poppins-Bold.ttf", 68)
    font_sub = ImageFont.truetype("/System/Library/Fonts/Supplemental/Poppins-SemiBold.ttf", 26)
except Exception:
    try:
        font_title = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 68)
        font_sub = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 26)
    except Exception:
        font_title = ImageFont.load_default()
        font_sub = ImageFont.load_default()

text_x = 270
text_y_title = 60
text_y_sub = 150

# Draw "BRIGHT HOPE"
draw_h.text((text_x, text_y_title), "Bright Hope", font=font_title, fill=(30, 42, 56, 255))

# Draw "LEARNING CENTER"
draw_h.text((text_x, text_y_sub), "LEARNING CENTER", font=font_sub, fill=(46, 134, 193, 255))

# Sub-tagline "Shelbyville, KY"
try:
    font_tag = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 20)
    draw_h.text((text_x + 310, text_y_sub + 4), "•  Shelbyville, KY", font=font_tag, fill=(63, 163, 77, 255))
except Exception:
    pass

img_h.save("public/assets/logo-horizontal.png", "PNG")
print("Saved public/assets/logo-horizontal.png")
