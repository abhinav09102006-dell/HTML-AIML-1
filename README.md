# 🛡️ Dr. Strange Shields

**Real-time gesture-controlled magical shields using computer vision and machine learning**

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![OpenCV](https://img.shields.io/badge/OpenCV-4.12-green.svg)
![MediaPipe](https://img.shields.io/badge/MediaPipe-0.10-orange.svg)

## ✨ Features

- 🖐️ **Real-time hand tracking** with MediaPipe (21 landmarks per hand)
- 🤖 **Smart gesture recognition** using SVM classifier
- ⚡ **Sequential activation** - shields activate only in correct gesture order
- 🎬 **Dynamic effects** - shield overlays scale with hand position
- 📺 **Flexible output** - OpenCV window, virtual camera, or both

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
pip install -r requirements.txt
```

### Run

```bash
# Run with OpenCV window (recommended)
python shield.py --output window

# Run with virtual camera output
python shield.py --output virtual

# Run with both outputs
python shield.py --output both
```

## 🎮 How to Use

### Gesture Sequence

1. **Activate Shields**: Perform gestures KEY_1 → KEY_2 → KEY_3 in sequence (within 2 seconds each)
2. **Deactivate Shields**: Perform gesture KEY_4

### Controls

- **'q'** - Quit application
- **Ctrl+C** - Force stop

### Command-line Options

```bash
python shield.py [OPTIONS]

  -m, --model FILE          Path to ML model (default: models/model_svm.sav)
  -t, --threshold FLOAT     Prediction threshold 0-1 (default: 0.9)
  -dc, --det_conf FLOAT     Detection confidence 0-1 (default: 0.5)
  -tc, --trk_conf FLOAT     Tracking confidence 0-1 (default: 0.5)
  -c, --camera_id INT       Camera ID (default: 0)
  -s, --shield FILE         Shield video path (default: effects/shield.mp4)
  -o, --output MODE         Output: window|virtual|both (default: both)
```

## 📁 Project Structure

```
Dr.-Strange-main/
├── shield.py              # Main application
├── utils.py               # Helper functions
├── requirements.txt       # Dependencies
├── README.md             # This file
├── LICENSE               # MIT License
├── models/
│   ├── model_svm.sav     # Default trained model
│   └── model_smv_010323.sav  # Alternative model
└── effects/
    ├── shield.mp4        # Default shield effect
    ├── shield_effect.mp4 # Alternative shield
    └── rasengan_shuriken.mp4  # Alternative effect
```

## 🔧 Requirements

- **Python**: 3.8 or higher
- **Webcam**: USB or built-in camera
- **OS**: Windows, Linux, or macOS

## 💡 Tips

- ✅ Keep both hands visible and well-lit
- ✅ Use plain backgrounds for better detection
- ✅ Adjust threshold if gestures are misread: `--threshold 0.7`
- ✅ Keep hands 30-60cm from camera

## 🐛 Troubleshooting

**Camera not detected?**

- Check camera permissions
- Try different camera ID: `--camera 1`

**Low FPS?**

- Close other applications using camera
- Ensure good lighting

**Gestures not recognized?**

- Ensure both hands are visible
- Lower threshold: `--threshold 0.7`

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details

## 🙏 Credits

Made with Python 🐍, hand gestures 🤲, and a touch of magic ✨

---

**Enjoy casting magical shields!** 🛡️✨
