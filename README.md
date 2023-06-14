## Next-Auth Mail & Password 認証

GitHub や Google のプロバイダーを使わず、email, password のみで認証。

### Next.js 13.4.5

```bash
npm install
```

```bash
.env作成
>>>>>>>>>>>>>>>>>>>>>>>>
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=auth
DATABASE_URL="mysql://root:root@localhost:3306/auth?schema=public"
```

```bash
docker環境作成
docker compose up -d
```

```bash
prismaの設定

npx prisma init
npx prisma migrate dev
npx prisma generate

PrismaStudioでユーザー作成
npx prisma stuio
```

```bash
アプリ起動
npm run dev
```
