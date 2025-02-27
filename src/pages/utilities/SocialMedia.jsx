const SocialMedia = ({ url, icon }) => {
  return (
    <a href={url}
      target="_blank"
      className="text-blueGray text-lg">
      {icon}
    </a>
  )
}

export default SocialMedia;