/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from "../types/user.type";

const USER: User = {
  name: "Hào",
  email: "admin@gmail.com",
  password: "123456",
};

export const authService = {
  login(email: string, password: string): Omit<User, "password"> {
    if (!email || !password) {
      throw new Error("Vui lòng nhập đầy đủ thông tin");
    }

    if (email !== USER.email || password !== USER.password) {
      throw new Error("Email hoặc mật khẩu không đúng");
    }

    const { password: _, ...safeUser } = USER;
    return safeUser;
  },
};
