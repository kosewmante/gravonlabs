from PIL import Image, ImageEnhance

JOBS = [
    # src, (left, top, side), out
    ("assets-src/team/kwadwo-original.jpg",            (156, 143, 1450), "kwadwo"),
    ("assets-src/team/yaw-original.png",(287, 213, 1700), "yaw"),
]

for src, (l, t, side), name in JOBS:
    im = Image.open(src).convert("RGB")
    W, H = im.size
    l = max(0, min(l, W - side)); t = max(0, min(t, H - side))
    im = im.crop((l, t, l + side, t + side))
    im = im.resize((800, 800), Image.LANCZOS)
    im = im.convert("L").convert("RGB")           # black & white
    im = ImageEnhance.Contrast(im).enhance(1.08)  # gentle punch back
    im.save(f"public/images/team/{name}.jpg", quality=84, optimize=True, progressive=True)
    im.save(f"public/images/team/{name}.webp", quality=82, method=6)
    print(name, im.size)
