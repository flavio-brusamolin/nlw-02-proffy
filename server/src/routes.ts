import { Router } from 'express'
import db from './database/connection'
import convertHoursToMinutes from './utils/convertHoursToMinutes'

interface ScheduleItem {
  week_day: number
  from: string
  to: string
}

const routes = Router()

routes.post('/classes', async (req, res) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = req.body

  const trx = await db.transaction()

  try {
    const [user_id] = await trx('users').insert({
      name,
      avatar,
      whatsapp,
      bio
    })

    const [class_id] = await trx('classes').insert({
      subject,
      cost,
      user_id
    })

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => ({
      ...scheduleItem,
      from: convertHoursToMinutes(scheduleItem.from),
      to: convertHoursToMinutes(scheduleItem.to),
      class_id
    }))

    await trx('class_schedule').insert(classSchedule)

    await trx.commit()

    return res.status(201).send()
  } catch (error) {
    await trx.rollback()

    return res.status(400).json({
      error: 'Unexpected error while creating new class'
    })
  }
})

export default routes
