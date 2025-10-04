import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import { exec } from "child_process";
import os from "os";

import Log from "./src/middlewares/Logs.js";
import errorHandler from "./src/utils/errorHandlers.js";
import routesApi from "./src/routes/index.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(Log("semua"));

// Routes utama
app.use("/api", routesApi);

// Error handling 404
app.use((req, res, next) => {
  next({ status: 404, message: "Endpoint tidak ditemukan" });
});
app.use(errorHandler);

// Fungsi start server
const startApp = () => {
  const server = app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(
        `❌ Port ${port} is already in use. Please choose another port.`
      );

      if (os.platform() === "win32") {
        exec(`netstat -a -n -o | find "${port}"`, (error, stdout) => {
          if (error) {
            console.error(
              `Gagal menemukan proses di port ${port}: ${error.message}`
            );
            process.exit(1);
          } else if (stdout) {
            const pidMatch = stdout.match(/LISTENING\s+(\d+)/);
            if (pidMatch && pidMatch[1]) {
              const pid = pidMatch[1];
              console.log(`Menemukan proses dengan PID ${pid} di port ${port}`);
              exec(`taskkill /PID ${pid} /F`, (killError) => {
                if (killError) {
                  console.error(
                    `Gagal menghentikan proses di port ${port}: ${killError.message}`
                  );
                  process.exit(1);
                } else {
                  console.log(`Proses di port ${port} telah dihentikan`);
                  setTimeout(startApp, 1000);
                }
              });
            } else {
              console.error(`Tidak ada proses ditemukan di port ${port}`);
              process.exit(1);
            }
          } else {
            exec(`fuser -k ${port}/tcp`, (error) => {
              if (error) {
                console.error(
                  `Gagal menghentikan proses di port ${port}: ${error.message}`
                );
                process.exit(1);
              } else {
                console.log(`⛔ Proses di port ${port} telah dihentikan`);
                setTimeout(startApp, 1000);
              }
            });
          }
        });
      }
    } else {
      console.error(`⭕ Kesalahan server: ${err.message}`);
      process.exit(1);
    }
  });
};

startApp();
