import mongoose, { Schema, Document } from 'mongoose';

export interface IArticle extends Document {
    title: string;
    content: string;
}

const ArticleSchema: Schema = new Schema({
    title: { type: String, required: true, maxLength: 100, unique: true },
    content: { type: String, required: true, minLength: 10, maxLength: 1000 },
});

export default mongoose.model<IArticle>('Article', ArticleSchema);
