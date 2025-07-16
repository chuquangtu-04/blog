import mongoose from 'mongoose';
import slugify from 'slugify';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        lever: { type: String },
        videoID: { type: String },
        slug: { type: String, unique: true },
    },
    {
        timestamps: true,
    },
);
Course.pre('save', function (next) {
    if (this.isModified('name')) {
        this.slug = slugify(this.name, { lower: true, strict: true });
    }
    next();
});
export default mongoose.model('Course', Course);
