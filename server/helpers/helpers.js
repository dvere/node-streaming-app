var spawn = require('child_process').spawn,
    config = require('../config/config'),
    cmd = config.rtmp_server.trans.ffmpeg;

const generateStreamThumbnail = (stream_key) => {
    console.log(stream_key, "stream key")
    const args = [
        '-i', 'rtmp://192.168.129.26:1935/live/'+stream_key,
        '-ss', '00:00:01',
        '-vframes', '1',
        '-f', 'image2',
        './server/thumbnails/'+stream_key+'.png',
    ];

    spawn('/usr/bin/ffmpeg', args, {
        detached: true,
        stdio: "ignore"
    }).unref();
};

module.exports = {
    generateStreamThumbnail : generateStreamThumbnail
};