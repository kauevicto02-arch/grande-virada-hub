import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  Flame,
  Heart,
  PlayCircle,
  Rocket,
  Sparkles,
  Star,
  Target,
  Trophy,
  Zap,
} from 'lucide-react'
import { Button } from '@components/ui/Button'
import { Card } from '@components/ui/Card'
import { ProgressBar } from '@components/ui/ProgressBar'
import { useFavorites } from '@hooks/useFavorites'
import { useProgress } from '@hooks/useProgress'
import { useUser } from '@hooks/useUser'
import { courseModules } from '@data/course'
import { getSidebarHubs } from '@lib/hubRegistry'

const motivationKeys = ['motivation1', 'motivation2', 'motivation3', 'motivation4']

function getGreetingKey() {
  const hour = new Date().getHours()
  if (hour < 12) return 'greetingMorning'
  if (hour < 18) return 'greetingAfternoon'
  return 'greetingEvening'
}

function getCurrentLesson(lastLessonId?: string) {
  const allLessons = courseModules.flatMap((module) => module.lessons.map((lesson) => ({ lesson, module })))
  if (!allLessons.length) return null

  if (!lastLessonId) return allLessons[0]

  const currentIndex = allLessons.findIndex(({ lesson }) => lesson.id === lastLessonId)
  if (currentIndex === -1) return allLessons[0]

  return allLessons[currentIndex + 1] ?? allLessons[currentIndex]
}

export default function DashboardPage() {
  const { t } = useTranslation('dashboard')
  const navigate = useNavigate()
  const { profile, stats } = useUser()
  const { favorites } = useFavorites()
  const { progress } = useProgress()

  const totalLessons = courseModules.reduce((acc, module) => acc + module.lessons.length, 0)
  const completedLessons = progress.completedLessons.length
  const progressPercent = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0
  const completedModules = courseModules.filter((module) =>
    module.lessons.every((lesson) => progress.completedLessons.includes(lesson.id))
  ).length
  const current = getCurrentLesson(progress.lastLessonId)
  const daysUsingHub = Math.max(1, Math.floor((Date.now() - new Date(profile.joinedAt).getTime()) / 86400000) + 1)
  const xp = completedLessons * 50 + stats.promptsCopied * 10 + favorites.length * 5 + completedModules * 100
  const level = Math.max(1, Math.floor(xp / 250) + 1)
  const levelProgress = xp % 250

  const motivation = useMemo(() => {
    const index = new Date().getDate() % motivationKeys.length
    return t(motivationKeys[index])
  }, [t])

  const activities = [
    stats.promptsCopied > 0 ? t('activityPrompt', { count: stats.promptsCopied }) : t('activityStartPrompt'),
    completedLessons > 0 ? t('activityLesson', { count: completedLessons }) : t('activityStartLesson'),
    favorites.length > 0 ? t('activityFavorite', { count: favorites.length }) : t('activityStartFavorite'),
  ]

  const achievements = [
    { label: t('achievementFirstStep'), unlocked: completedLessons > 0, icon: PlayCircle },
    { label: t('achievementPromptMaker'), unlocked: stats.promptsCopied > 0, icon: Sparkles },
    { label: t('achievementCollector'), unlocked: favorites.length > 0, icon: Heart },
    { label: t('achievementModuleMaster'), unlocked: completedModules > 0, icon: Trophy },
  ]

  const quickHubs = getSidebarHubs().filter((hub) => hub.id !== 'dashboard').slice(0, 6)

  return (
    <div className="space-y-6 pb-8">
    {/* BANNER GTA */}
<div className="overflow-hidden rounded-2xl border border-white/10">
  <img
    src="/covers/dashboard/banner-gta.png"
    alt="Grande Virada Hub"
    className="block w-full h-auto object-cover"
  />
</div>
      <section className="relative overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.045] p-5 shadow-[var(--shadow-card)] md:p-7">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-brand-pink)]/25 blur-3xl" />
        <div className="absolute left-1/3 top-0 h-56 w-56 rounded-full bg-[var(--color-brand-cyan)]/10 blur-3xl" />
        <div className="relative grid gap-6 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-[var(--color-brand-cyan)]">
              <Flame size={14} /> {t('operationHub')}
            </div>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
              {t(getGreetingKey())}, <span className="text-gradient-brand">{profile.name}</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-[var(--color-text-secondary)] md:text-base">{motivation}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" icon={<PlayCircle size={18} />} onClick={() => navigate('/academia')}>
                {t('continueButton')}
              </Button>
              <Button variant="secondary" size="lg" icon={<Sparkles size={18} />} onClick={() => navigate('/arsenal-ia')}>
                {t('createPromptButton')}
              </Button>
            </div>
          </div>

          <Card className="relative border-[var(--color-brand-cyan)]/20 bg-black/20">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--color-brand-cyan)]">{t('continueWhereStopped')}</p>
            <h2 className="text-xl font-semibold">{current?.lesson.title ?? t('noLesson')}</h2>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{current?.module.title}</p>
            <div className="my-5">
              <ProgressBar value={progressPercent} label={t('statsProgress')} />
            </div>
            <Button fullWidth icon={<ArrowRight size={17} />} onClick={() => navigate(current ? `/academia/${current.module.id}` : '/academia')}>
              {t('openNextMission')}
            </Button>
          </Card>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <PremiumMetric icon={Zap} label={t('statsXp')} value={xp} caption={t('levelLabel', { level })} />
        <PremiumMetric icon={CalendarDays} label={t('statsDays')} value={daysUsingHub} caption={t('daysCaption')} />
        <PremiumMetric icon={BookOpenCheck} label={t('statsProgress')} value={`${progressPercent}%`} caption={t('lessonsCaption', { completed: completedLessons, total: totalLessons })} />
        <PremiumMetric icon={Heart} label={t('statsFavorites')} value={favorites.length} caption={t('favoritesCaption')} />
      </section>

      <section className="grid gap-5 lg:grid-cols-[1fr_.85fr]">
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-brand-pink)]">{t('growthPlan')}</p>
              <h2 className="mt-2 text-2xl font-semibold">{t('progressTitle')}</h2>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[var(--color-brand-cyan)]">
              {t('levelLabel', { level })}
            </div>
          </div>
          <div className="mt-5 space-y-5">
            <ProgressBar value={progressPercent} label={t('courseProgress')} />
            <ProgressBar value={Math.round((levelProgress / 250) * 100)} label={t('nextLevel', { xp: 250 - levelProgress })} />
            <div className="grid grid-cols-3 gap-3 text-center text-xs text-[var(--color-text-secondary)]">
              <div className="rounded-[var(--radius-md)] bg-white/5 p-3"><strong className="block text-lg text-white">{completedModules}</strong>{t('modules')}</div>
              <div className="rounded-[var(--radius-md)] bg-white/5 p-3"><strong className="block text-lg text-white">{Math.max(0, totalLessons - completedLessons)}</strong>{t('remaining')}</div>
              <div className="rounded-[var(--radius-md)] bg-white/5 p-3"><strong className="block text-lg text-white">{stats.promptsCopied}</strong>{t('prompts')}</div>
            </div>
          </div>
        </Card>

        <Card>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-brand-cyan)]">{t('achievements')}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {achievements.map((item) => (
              <div key={item.label} className={`flex items-center gap-3 rounded-[var(--radius-md)] border p-3 ${item.unlocked ? 'border-[var(--color-brand-pink)]/30 bg-[var(--color-brand-pink)]/10' : 'border-white/10 bg-white/5 opacity-60'}`}>
                <item.icon size={18} className={item.unlocked ? 'text-[var(--color-brand-pink)]' : 'text-[var(--color-text-muted)]'} />
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-5 lg:grid-cols-[.85fr_1fr]">
        <Card>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-brand-cyan)]">{t('recentActivity')}</p>
          <div className="mt-4 space-y-3">
            {activities.map((activity, index) => (
              <div key={activity} className="flex items-center gap-3 rounded-[var(--radius-md)] bg-white/5 p-3 text-sm text-[var(--color-text-secondary)]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-[var(--color-brand-cyan)]">{index + 1}</span>
                {activity}
              </div>
            ))}
          </div>
        </Card>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-brand-pink)]">{t('quickAccess')}</p>
              <h2 className="mt-1 text-2xl font-semibold">{t('chooseHub')}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {quickHubs.map((hub, index) => (
              <motion.button
                key={hub.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                onClick={() => navigate(hub.path)}
                className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.045] p-4 text-left shadow-[var(--shadow-card)] focus-ring"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[var(--color-brand-cyan)]/0 blur-2xl transition group-hover:bg-[var(--color-brand-cyan)]/20" />
                <hub.icon className="relative mb-4 text-[var(--color-brand-cyan)]" size={24} />
                <h3 className="relative font-semibold">{t(hub.i18nKey, { ns: 'common' })}</h3>
                <p className="relative mt-1 text-xs text-[var(--color-text-secondary)]">{t('hubCardDescription')}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function PremiumMetric({
  icon: Icon,
  label,
  value,
  caption,
}: {
  icon: typeof Rocket
  label: string
  value: string | number
  caption: string
}) {
  return (
    <Card className="group relative overflow-hidden">
      <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[var(--color-brand-purple)]/20 blur-2xl transition group-hover:bg-[var(--color-brand-pink)]/25" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-[var(--color-text-secondary)]">{label}</p>
          <p className="mt-2 text-3xl font-semibold">{value}</p>
          <p className="mt-1 text-xs text-[var(--color-text-muted)]">{caption}</p>
        </div>
        <div className="rounded-[var(--radius-md)] bg-white/5 p-3 text-[var(--color-brand-cyan)]">
          <Icon size={20} />
        </div>
      </div>
    </Card>
  )
}
