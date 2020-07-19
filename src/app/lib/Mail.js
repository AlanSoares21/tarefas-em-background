import nodemailer from 'nodemailer';
import config from '../../config/mail';

export default nodemailer.createTransport(config);