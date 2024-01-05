"use strict";
exports.__esModule = true;
exports.FileRouter = exports.satisfies = exports.ourFileRouter = void 0;
var nextjs_1 = require("@clerk/nextjs");
var next_1 = require("uploadthing/next");
var f = next_1.createUploadthing();
var handleAuth = function () {
    var userId = nextjs_1.auth().userId;
    if (!userId)
        throw new Error("Unauthorized");
    return { userId: userId };
};
// FileRouter for your app, can contain multiple FileRoutes
exports.ourFileRouter = {
    serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(function () { return handleAuth(); })
        .onUploadComplete(function () { }),
    messageFile: f(["image", "pdf"])
        .middleware(function () { return handleAuth(); })
        .onUploadComplete(function () { })
};
