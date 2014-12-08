var fs = require("fs");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  FileReadStream: { enumerable: true, value: fs.FileReadStream },
  FileWriteStream: { enumerable: true, value: fs.FileWriteStream },
  ReadStream: { enumerable: true, value: fs.ReadStream },
  Stats: { enumerable: true, value: fs.Stats },
  SyncWriteStream: { enumerable: true, value: fs.SyncWriteStream },
  WriteStream: { enumerable: true, value: fs.WriteStream },
  //_toUnixTimestamp: // skipping
  appendFile: { enumerable: true, value: promisify(fs, fs.appendFile, 2) },
  appendFileSync: { enumerable: true, value: bind(fs, fs.appendFileSync) },
  chmod: { enumerable: true, value: promisify(fs, fs.chmod, 2) },
  chmodSync: { enumerable: true, value: bind(fs, fs.chmodSync) },
  chown: { enumerable: true, value: promisify(fs, fs.chown, 3) },
  chownSync: { enumerable: true, value: bind(fs, fs.chownSync) },
  close: { enumerable: true, value: promisify(fs, fs.close, 1) },
  closeSync: { enumerable: true, value: bind(fs, fs.closeSync) },
  createReadStream: { enumerable: true, value: bind(fs, fs.createReadStream) },
  createWriteStream: { enumerable: true, value: bind(fs, fs.createWriteStream) },
  exists: { enumerable: true, value: promisify(fs, fs.exists, 1) },
  existsSync: { enumerable: true, value: bind(fs, fs.existsSync) },
  fchmod: { enumerable: true, value: promisify(fs, fs.fchmod, 2) },
  fchmodSync: { enumerable: true, value: bind(fs, fs.fchmodSync) },
  fchown: { enumerable: true, value: promisify(fs, fs.fchown, 3) },
  fchownSync: { enumerable: true, value: bind(fs, fs.fchownSync) },
  fdatasync: { enumerable: true, value: promisify(fs, fs.fdatasync, 1) },
  fdatasyncSync: { enumerable: true, value: bind(fs, fs.fdatasyncSync) },
  fstat: { enumerable: true, value: promisify(fs, fs.fstat, 1) },
  fstatSync: { enumerable: true, value: bind(fs, fs.fstatSync) },
  fsync: { enumerable: true, value: promisify(fs, fs.fsync, 1) },
  fsyncSync: { enumerable: true, value: bind(fs, fs.fsyncSync) },
  ftruncate: { enumerable: true, value: promisify(fs, fs.ftruncate, 2) },
  ftruncateSync: { enumerable: true, value: bind(fs, fs.ftruncateSync) },
  futimes: { enumerable: true, value: promisify(fs, fs.futimes, 3) },
  futimesSync: { enumerable: true, value: bind(fs, fs.futimesSync) },
  link: { enumerable: true, value: promisify(fs, fs.link, 2) },
  linkSync: { enumerable: true, value: bind(fs, fs.linkSync) },
  lstat: { enumerable: true, value: promisify(fs, fs.lstat, 1) },
  lstatSync: { enumerable: true, value: bind(fs, fs.lstatSync) },
  mkdir: { enumerable: true, value: promisify(fs, fs.mkdir, 1) },
  mkdirSync: { enumerable: true, value: bind(fs, fs.mkdirSync) },
  open: { enumerable: true, value: promisify(fs, fs.open, 2) },
  openSync: { enumerable: true, value: bind(fs, fs.openSync) },
  read: { enumerable: true, value: promisify(fs, fs.read, 5) },
  readFile: { enumerable: true, value: promisify(fs, fs.readFile, 1) },
  readFileSync: { enumerable: true, value: bind(fs, fs.readFileSync) },
  readSync: { enumerable: true, value: bind(fs, fs.readSync) },
  readdir: { enumerable: true, value: promisify(fs, fs.readdir, 1) },
  readdirSync: { enumerable: true, value: bind(fs, fs.readdirSync) },
  readlink: { enumerable: true, value: promisify(fs, fs.readlink, 1) },
  readlinkSync: { enumerable: true, value: bind(fs, fs.readlinkSync) },
  realpath: { enumerable: true, value: promisify(fs, fs.realpath, 1) },
  realpathSync: { enumerable: true, value: bind(fs, fs.realpathSync) },
  rename: { enumerable: true, value: promisify(fs, fs.rename, 2) },
  renameSync: { enumerable: true, value: bind(fs, fs.renameSync) },
  rmdir: { enumerable: true, value: promisify(fs, fs.rmdir, 1) },
  rmdirSync: { enumerable: true, value: bind(fs, fs.rmdirSync) },
  stat: { enumerable: true, value: promisify(fs, fs.stat, 1) },
  statSync: { enumerable: true, value: bind(fs, fs.statSync) },
  symlink: { enumerable: true, value: promisify(fs, fs.symlink, 2) },
  symlinkSync: { enumerable: true, value: bind(fs, fs.symlinkSync) },
  truncate: { enumerable: true, value: promisify(fs, fs.truncate, 2) },
  truncateSync: { enumerable: true, value: bind(fs, fs.truncateSync) },
  unlink: { enumerable: true, value: promisify(fs, fs.unlink, 1) },
  unlinkSync: { enumerable: true, value: bind(fs, fs.unlinkSync) },
  unwatchFile: { enumerable: true, value: bind(fs, fs.unwatchFile) },
  utimes: { enumerable: true, value: promisify(fs, fs.utimes, 3) },
  utimesSync: { enumerable: true, value: bind(fs, fs.utimesSync) },
  watch: { enumerable: true, value: bind(fs, fs.watch) },
  watchFile: { enumerable: true, value: bind(fs, fs.watchFile) },
  write: { enumerable: true, value: promisify(fs, fs.write, 5) },
  writeFile: { enumerable: true, value: promisify(fs, fs.writeFile, 2) },
  writeFileSync: { enumerable: true, value: bind(fs, fs.writeFileSync) },
  writeSync: { enumerable: true, value: bind(fs, fs.writeSync) },
});