import { data } from '../../config/data.js'
import { timeAgo } from '../../helpers/time.js'

const footer = {
    socialMedia: {
        facebook: 'https://facebook.com/#',
        twitter: 'https://twitter.com/#',
        instagram: 'https://instagram.com/#'
    }
}

const head = {
    webTitle: 'NODEJS Starter',
    pageTitle: 'Home'
}

const homePage = (req, res) => {
    
    res.render('frontend/pages/home', {
        head: head,
        footer: footer,
        data: data,
        func: {
            timeAgo
        }
    })
}

export {
    homePage
}