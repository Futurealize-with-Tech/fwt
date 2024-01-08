export const returnMentorByCategory = (selectCategorys, mentor) => {
    if (selectCategorys.length === 0) {
        return true;
    } else {
        for (let i = 0;i < selectCategorys.length;i++) {
            if (!mentor.course.includes(selectCategorys[i])) {
                return false;
            };
        };

        return true;
    };
};

export const returnMentorByRegion = (region, mentor) => {
    if (region === '' || mentor.region === region) {
        return true;
    } else {
        return false;
    };
};
