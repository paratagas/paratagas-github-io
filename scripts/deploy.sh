echo 'Starting deploy...'

rm -rf ../paratagas.github.io/*
cp -r ./build/. ../paratagas.github.io
cp ./README.md ../paratagas.github.io/README.md

echo 'Deploy finished'
