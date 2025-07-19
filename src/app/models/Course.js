import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence';

const AutoIncrement = mongooseSequence(mongoose);
import slugify from 'slugify';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const courseSchema = new Schema(
    {
        _id: { type: Number },
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        lever: { type: String },
        videoID: { type: String },
        slug: { type: String, unique: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);
courseSchema.pre('save', function (next) {
    if (this.isModified('name')) {
        this.slug = slugify(this.name, { lower: true, strict: true });
    }
    next();
});

courseSchema.query.sortStable = function (normalObject, isValidType) {
    if (normalObject.hasOwnProperty('_sort')) {
        return this.sort({
            [normalObject.column]: isValidType ? normalObject.type : 'desc',
        });
    }

    return this;
};

courseSchema.plugin(mongooseDelete, {
    deleted: true,
    deletedAt: true,
    overrideMethods: 'all',
});
courseSchema.plugin(AutoIncrement);

export default mongoose.model('Course', courseSchema);
