from PIL import Image
import numpy as np

# Load original logo
img_path = r"c:\Users\Administrator\Documents\open space reality\Only space.jpeg"
img = Image.open(img_path).convert("RGBA")
data = np.array(img)

# White background removal
# Pixels close to white (R>230, G>230, B>230) -> transparent
r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]
white_mask = (r > 220) & (g > 220) & (b > 220)
data[:, :, 3][white_mask] = 0

# Save transparent original
img_trans = Image.fromarray(data)
img_trans.save(r"c:\Users\Administrator\Documents\open space reality\public\assets\only_space_logo_transparent.png")

# Now create dark mode version: convert dark/black pixels to pure white (#FFFFFF)
data_dark = data.copy()
# Identify black/dark pixels (low RGB values: r<100, g<100, b<100) that are NOT transparent
non_trans = data_dark[:, :, 3] > 50
dark_pixels = (data_dark[:, :, 0] < 120) & (data_dark[:, :, 1] < 120) & (data_dark[:, :, 2] < 120) & non_trans

# Change black pixels to crisp white for dark backgrounds
data_dark[:, :, 0][dark_pixels] = 255
data_dark[:, :, 1][dark_pixels] = 255
data_dark[:, :, 2][dark_pixels] = 255

img_dark_theme = Image.fromarray(data_dark)
img_dark_theme.save(r"c:\Users\Administrator\Documents\open space reality\public\assets\only_space_logo_dark.png")

# Create dark mode version with Gold text option
data_gold = data.copy()
# Convert dark text/buildings to Gold (#D4AF37 -> RGB 212, 175, 55)
data_gold[:, :, 0][dark_pixels] = 255
data_gold[:, :, 1][dark_pixels] = 255
data_gold[:, :, 2][dark_pixels] = 255

img_gold_theme = Image.fromarray(data_gold)
img_gold_theme.save(r"c:\Users\Administrator\Documents\open space reality\public\assets\only_space_logo_gold.png")

print("Logo processing completed successfully!")
