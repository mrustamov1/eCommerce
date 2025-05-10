FROM node:21.7.2

WORKDIR /var/www/server

COPY package.json ./

# RUN npm install -g npm@10
RUN npx playwright install chromium --with-deps
RUN npm install


RUN echo "{\"compilerOptions\": {\"composite\": true, \"target\": \"ESNext\", \"module\": \"NodeNext\", \"moduleResolution\": \"NodeNext\", \"sourceMap\": true, \"declaration\": true, \"declarationMap\": true, \"skipLibCheck\": true, \"strict\": true, \"resolveJsonModule\": true, \"allowSyntheticDefaultImports\": true, \"emitDecoratorMetadata\": true, \"experimentalDecorators\": true, \"esModuleInterop\": true, \"useDefineForClassFields\": true, \"forceConsistentCasingInFileNames\": true, \"pretty\": true }}" >> tsconfig.json
COPY ./src ./src

RUN ./node_modules/.bin/tsc

CMD ["node", "src/server.js"]
