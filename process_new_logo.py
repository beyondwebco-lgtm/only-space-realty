from PIL import Image
import numpy as np

img_path = r"C:\Users\Administrator\.gemini\antigravity-ide\brain\f9623db4-499f-4359-90e1-04b5fee758f3\media__1784729625712.png"
img = Image.open(img_path).convert("RGBA")
arr = np.array(img)

r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]

# Create transparent version (keep red & black, remove white background)
# White background: r,g,b > 200
transparent_arr = arr.copy()
is_bg = (r > 190) & (g > 190) & (b > 190)
transparent_arr[is_bg, 3] = 0

img_trans = Image.fromarray(transparent_arr)
img_trans.save(r"c:\Users\Administrator\Documents\open space reality\public\assets\official_logo_transparent.png")
img_trans.save(r"c:\Users\Administrator\Documents\open space reality\public\assets\official_logo.png")

# Now create dark theme version:
# Where background is white -> make it transparent
# Where pixels are black/dark (not red, not background) -> make solid white (#FFFFFF)
dark_arr = transparent_arr.copy()
is_fg = dark_arr[:, :, 3] > 0

# Red pixels are predominantly red (r > 150 and g < 100 and b < 100)
is_red = (r > 150) & (g < 100) & (b < 100) & is_fg

# Black/dark pixels are non-red foreground pixels
is_black = is_fg & (~is_red)

# Set all black/dark foreground pixels (the text 'ONLY SPACE' and black building structures) to pure white (#FFFFFF)
dark_arr[is_black, 0] = 255
dark_arr[is_black, 1] = 255
dark_arr[is_black, 2] = 255
dark_arr[is_black, 3] = 255

img_dark = Image.fromarray(dark_arr)
img_dark.save(r"c:\Users\Administrator\Documents\open space reality\public\assets\official_logo_dark.png")
img_dark.save(r"c:\Users\Administrator\Documents\open space reality\public\assets\logo.png")

print("New logo processed with solid fill for dark mode!")
