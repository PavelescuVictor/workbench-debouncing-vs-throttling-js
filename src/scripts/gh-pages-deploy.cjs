const exec = require('child_process');
const fs = require('fs');

(async () => {
  try {
    await exec('git', ['checkout', '--orphan', 'gh-pages']);
    console.log('Building...');
    await exec('yarn', ['run', 'build']);
    // Check if using dist or build folder
    const folderName = fs.existsSync('dist') ? 'dist' : 'build';
    await exec('git', ['--work-tree', folderName, 'add', '--all']);
    await exec('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages']);
    console.log('Pushing to gh-pages...');
    await exec('git', ['push', 'origin', 'HEAD:gh-pages', '--force']);
    await exec('rm', ['-r', folderName]);
    await exec('git', ['checkout', '-f', 'master']);
    await exec('git', ['branch', '-D', 'gh-pages']);
    console.log('Successfully deployed');
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();