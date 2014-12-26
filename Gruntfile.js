'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: "Draft/less/*.less",
            tasks: ["less"]
        },
        // "less"-task configuration
        less: {
            // production config is also available
            development: {
                options: {
                    // Specifies directories to scan for @import directives when parsing.
                    // Default value is the directory of the source, which is probably what you want.
                    paths: ["Draft/css/"]
                },
                files: {
                    // compilation.css  :  source.less
                    "Draft/css/collieUI.css": ["Draft/less/alerts.less",
                        "Draft/less/badges.less",
                        "Draft/less/buttongroups.less",
                        "Draft/less/buttons.less",
                        "Draft/less/collie-grids.less",
                        "Draft/less/dropdowns.less",
                        "Draft/less/forms.less",
                        "Draft/less/helper.less",
                        "Draft/less/images.less",
                        "Draft/less/img-scroll.less",
                        "Draft/less/labels.less",
                        "Draft/less/list-groups.less",
                        "Draft/less/modals.less",
                        "Draft/less/navs.less",
                        "Draft/less/other-forms.less",
                        "Draft/less/pagination.less",
                        "Draft/less/plugins.less",
                        "Draft/less/popups.less",
                        "Draft/less/progressbars.less",
                        "Draft/less/tables.less",
                        "Draft/less/tabs.less",
                        "Draft/less/tooltips.less"
                    ]
                }
            }
        },
        cssmin: {
            //options: {
            //    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            //    //美化代码
            //    beautify: {
            //        //中文ascii化，非常有用！防止中文乱码的神配置
            //        ascii_only: true
            //    }
            //},
            css: {
                src:'Draft/css/collieUI.css',
                dest:'Draft/css/collieUI.min.css'
            }
            //my_target: {
            //    files: [
            //        {
            //            expand: true,
            //            //相对路径
            //            cwd: 'Draft/css/',
            //            src: 'Draft/css/collieUI.css',
            //            dest: 'Draft/css/collieUI.min.css'
            //        }
            //    ]
            //}
        }
    });
    // the default task (running "grunt" in console) is "watch"
    grunt.registerTask('default', ['less','cssmin','watch']);
};