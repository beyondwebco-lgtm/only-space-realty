from PIL import Image
import numpy as np

# Load the user's uploaded official logo image
img_path = r"c:\Users\Administrator\Documents\open space reality\public\assets\official_logo.png"
img = Image.open(img_path).convert("RGBA")
data = np.array(img)

# Remove white/off-white background
r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]
bg_mask = (r > 200) & (g > 200) & (b > 200)
data[:, :, 3][bg_mask] = 0

# Save transparent version
img_transparent = Image.fromarray(data)
img_transparent.save(r"c:\Users\Administrator\Documents\open space reality\public\assets\official_logo_transparent.png")

# Now create dark theme version (for dark header/footer):
# Convert black/dark pixels to pure white (#FFFFFF) so "ONLY SPACE" & tagline are crisp white on dark background
data_dark = data.copy()
non_trans = data_dark[:, :, 3] > 50
dark_pixels = (data_dark[:, :, 0] < 140) & (data_dark[:, :, 1] < 140) & (data_dark[:, :, 2] < 140) & non_trans

data_dark[:, :, 0][dark_pixels] = 255
data_dark[:, :, 1][dark_pixels] = 255
data_dark[:, :, 2][dark_pixels] = 255

img_dark = Image.fromarray(data_dark)
img_dark.save(r"c:\Users\Administrator\Documents\open space reality\public\assets\official_logo_dark.png")

print("Clean logo transparent & dark theme generation complete!")
