npm run build
cp dist/index.html dist/404.html
git add .
git commit -m "dist"
git subtree push --prefix dist origin gh-pages