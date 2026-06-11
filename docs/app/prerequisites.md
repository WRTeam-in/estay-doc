---
id: prerequisites
title: App Prerequisites
sidebar_position: 1
---

# App Prerequisites

Before setting up the eStay mobile app, install the required software and tools listed below.

## Flutter Setup

Download and install the Flutter SDK from the official site:

- [Flutter SDK — Official Install Guide](https://docs.flutter.dev/get-started/install)

Follow the installation steps for your operating system (Windows / macOS / Linux), then run `flutter doctor` to verify the setup.

## Software Requirements

The eStay app was developed and tested with the following versions:

| Software | Version | Purpose |
|----------|---------|---------|
| Flutter SDK | 3.41.2 (stable) | App framework |
| Java (JDK) | 21 (LTS) | Android build toolchain |
| Android Studio | 2025.2.3 | Android SDK, emulator, build tools |
| Xcode | 26.2 | iOS build (macOS only) |
| CocoaPods | Latest stable | iOS dependency manager |
| Git | Latest stable | Version control |
| VS Code _or_ Android Studio | Latest stable | Code editor / IDE |

### Platform-Specific

**Android**

- Android SDK Platform 34+ (installed via Android Studio)
- Android SDK Command-line Tools
- Android Emulator or physical device (USB debugging enabled)

**iOS** (macOS only)

- Xcode 26.2+
- iOS Simulator or physical device
- Apple Developer account (for signing and release builds)

## Verify Installation

Run the following command in your terminal to confirm everything is installed correctly:

```bash
flutter doctor -v
```

All checks should pass (green check marks) before moving to the next step.

## Detailed Environment Setup

A complete walkthrough for installing Flutter, configuring the Java JDK, and setting up your IDE.

### 1️⃣ Install Flutter

- Download the Flutter SDK from the official site: [Flutter SDK](https://docs.flutter.dev/get-started/install)
- Extract the ZIP file to a suitable location (e.g., `C:\flutter` on Windows or `~/flutter` on macOS/Linux).
- Add Flutter to your system path:
  - **Windows:** Add `C:\flutter\bin` to `System Environment Variables`.
  - **macOS/Linux:** Add `export PATH="$HOME/flutter/bin:$PATH"` to `~/.zshrc` or `~/.bashrc`.
- Verify the installation:

  ```sh
  flutter doctor --verbose
  ```
- Ensure all dependencies are installed before proceeding.

### 2️⃣ Install Java JDK

- Download the latest **Java Development Kit (JDK)** from [Oracle](https://www.oracle.com/java/technologies/javase-downloads.html) or [OpenJDK](https://openjdk.org/).
- Install the JDK and note the installation path.
- Set up environment variables:
  - **Windows:**
    - Add `JAVA_HOME` as the JDK installation path in system variables.
    - Add `%JAVA_HOME%\bin` to the `Path` variable.
  - **macOS/Linux:**

    ```sh
    export JAVA_HOME=$(/usr/libexec/java_home)
    export PATH=$JAVA_HOME/bin:$PATH
    ```
- Verify installation:

  ```sh
  java -version
  ```

### 3️⃣ Install an IDE

- **Android Studio** (recommended for full Android development tools)
  - Download from: [Android Studio](https://developer.android.com/studio)
  - Install the Flutter & Dart plugins from **Preferences > Plugins**.
- **Visual Studio Code** (lightweight & fast)
  - Download from: [VS Code](https://code.visualstudio.com/)
  - Install the Flutter and Dart extensions from the Extensions Marketplace.

### 4️⃣ Final Check

- Run `flutter doctor` and resolve any missing dependencies.
- Configure Android (Android Studio + SDKs) and iOS (Xcode + simulator, macOS only).
- Run a simple Flutter app to confirm everything works as expected.
