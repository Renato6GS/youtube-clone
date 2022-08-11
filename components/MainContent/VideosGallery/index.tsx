import { VIDEOS } from 'constants/videos';

import styles from './styles.module.css';

export default function VideosGallery() {
  return (
    <>
      {VIDEOS.map(({ id, title, thumbnail, url, authorName }) => {
        return (
          <div key={id} className={styles.videoContent}>
            <a className={styles.videoAnchor} href={url}>
              <div className={styles.videoIllustration}>
                <img className={styles.videoThumbnail} src={thumbnail} alt={title} />
                <p className={styles.videoDuration}>20:09</p>
              </div>
              <div className={styles.videoInformation}>
                <img className={styles.authorImage} src='/thumbnailsVideos/author.jpg' alt={authorName} />
                <div className={styles.videoDetails}>
                  <span className={styles.title}>{title}</span>
                  <span className={styles.authorName}>{authorName}</span>
                  <span className={styles.viewsTimes}>12 M de vistas • hace 2 años</span>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
}
