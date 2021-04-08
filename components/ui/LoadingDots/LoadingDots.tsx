import s from './LoadingDots.module.css'

const LoadingDots: React.FC = () => {
  return (
    <div className={s.root}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default LoadingDots
