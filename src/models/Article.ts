import mongoose, { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface IArticle extends Document {
    id: string;
    title: string;
    content: string;
}

const ArticleSchema: Schema = new Schema({
    id: { type: String, default: uuidv4, required: true, unique: true },
    title: { type: String, required: true, maxLength: 100 },
    content: { type: String, required: true, minLength: 10, maxLength: 1000 },
});

export default mongoose.model<IArticle>('Article', ArticleSchema);
