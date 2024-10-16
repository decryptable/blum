<div align="center">


> The BLUM developers have updated their security by using additional encryption on the payload data sent to the server for data validation (probably in their WebAssembly file), which makes it very difficult to manipulate API requests. However, it's not impossible. I just don't have time for things like this.

<h1>BLUM TOOL</h1>

<a href="#-indonesian">🇮🇩 Indonesian</a> | <a href="#-english">🇺🇸 English</a>

<hr/>

<p>Author: <a href="https://discord.gg/ueCy4vyJ4y" target="_blank">@decryptable</a></p>

<a href="https://saweria.co/decryptable" target="_blank">
<img src="https://github.com/user-attachments/assets/382b3377-e51a-4a97-9f92-5f21252ef682" alt="donate" width="120">
</a>

### Fast Setup (copy, paste and run. Supported all platforms):

```bash
npx github:decryptable/blum
```

</div>
<br/>
<br/>
<br/>

</div>

# 🇮🇩 Indonesian

> Tool untuk mendapatkan poin maksimal dari bot [@BlumCryptoBot](https://t.me/BlumCryptoBot) untuk setiap game-nya.

### 💻 Ubuntu & MacOS

1. Pastikan sudah terinstall [git](https://git-scm.com/). Jika belum silahkan download & install. **(WAJIB)**
2. Pastikan sudah terinstall [NodeJS](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs). **(WAJIB)**
3. Buka aplikasi terminal, kemudian clone repository ini:

   ```bash
   git clone https://github.com/decryptable/blum.git && cd blum
   ```

4. Berikan izin `execute` untuk [`linux.sh`](./linux.sh) dengan cara menjalankan:
   ```bash
   chmod +x ./linux.sh
   ```
5. **SELESAI!** Instruksi selanjutnya silahkan baca pada bagian [penggunaan](#penggunaan).

### 📱 Android

1. Pastikan Anda sudah memiliki aplikasi Termux. Jika belum silahkan [download disini](https://f-droid.org/repo/com.termux_1020.apk).
2. Buka aplikasi Termux.
3. Pastikan `git` dan `nodejs` sudah terinstall. Jika belum, jalankan _command_ berikut pada Termux:
   ```bash
   pkg install git openssh nodejs -y
   ```
4. Kemudian clone repository ini:

   ```bash
   git clone https://github.com/decryptable/blum.git && cd blum
   ```

5. Berikan izin `execute` untuk [`linux.sh`](./linux.sh) dengan cara menjalankan:
   ```bash
   chmod +x ./linux.sh
   ```
6. **SELESAI!** Instruksi selanjutnya silahkan baca pada bagian [penggunaan](#penggunaan).

### 💻 Windows

1. Pastikan sudah terinstall [git](https://git-scm.com/). Jika belum silahkan download & install. **(WAJIB)**
2. Pastikan sudah terinstall [NodeJS](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs). **(WAJIB)**
3. Buka aplikasi CMD di Windows, kemudian clone repository ini:

   ```cmd
   git clone https://github.com/decryptable/blum.git; cd blum
   ```

4. **SELESAI!** Instruksi selanjutnya silahkan baca pada bagian [penggunaan](#penggunaan).

### Penggunaan

1. Dapatkan `init_data` terlebih dahulu. Ikuti instruksinya pada [halaman berikut](./get-init-data.md).
2. Jalankan _command_ berikut:
   1. Untuk **Ubuntu**, **MacOS** & **Android**:
      ```bash
      ./linux.sh
      ```
   2. Untuk **Windows**:
      ```cmd
      ./windows.cmd
      ```

<br/>
<br/>
<br/>

# 🇺🇲 English

> Tool to get maximum points from bot [@BlumCryptoBot](https://t.me/BlumCryptoBot) for each game.

### 💻 Ubuntu & MacOS

1. Make sure you have installed [git](https://git-scm.com/). If not, please download & install. **(REQUIRED)**
2. Make sure you have installed [NodeJS](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs). **(REQUIRED)**
3. Open the terminal application, then clone this repository:

   ```bash
   git clone https://github.com/decryptable/blum.git && cd blum
   ```

4. Grant `execute` permission for [`linux.sh`](./linux.sh) by running:
   ```bash
   chmod +x ./linux.sh
   ```
5. **DONE!** Further instructions please read the [usage](#usage) section.

### 📱 Android

1. Make sure you already have the Termux application. If not, please [download here](https://f-droid.org/repo/com.termux_1020.apk).
2. Open the Termux application.
3. Make sure `git` and `nodejs` are installed. If not, run the following _command_ on Termux:
   ```bash
   pkg install git openssh nodejs -y
   ```
4. Then clone this repository:

   ```bash
   git clone https://github.com/decryptable/blum.git && cd blum
   ```

5. Grant `execute` permission to [`linux.sh`](./linux.sh) by running:
   ```bash
   chmod +x ./linux.sh
   ```
6. **DONE!** Further instructions please read the [usage](#usage) section.

### 💻 Windows

1. Make sure you have installed [git](https://git-scm.com/). If not, please download & install. **(REQUIRED)**
2. Make sure you have installed [NodeJS](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs). **(REQUIRED)**
3. Open CMD application in Windows, then clone this repository:

   ```cmd
   git clone https://github.com/decryptable/blum.git; cd blum
   ```

4. **DONE!** Further instructions please read the [usage](#usage) section.

### Usage

1. Get `init_data` first. Follow the instructions on [the following page](./get-init-data.md).
2. Execute the following _command_:
   1. For **Ubuntu**, **MacOS** & **Android**:
      ```bash
      ./linux.sh
      ```
   2. For **Windows**:
      ```cmd
      ./windows.cmd
      ```
