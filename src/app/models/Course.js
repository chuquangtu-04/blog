import mongoose from 'mongoose';
import slugify from 'slugify';
import mongooseDelete from 'mongoose-delete';

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
Course.plugin(mongooseDelete, {
    deleted: true,
    deletedAt: true,
    overrideMethods: 'all',
});

export default mongoose.model('Course', Course);
