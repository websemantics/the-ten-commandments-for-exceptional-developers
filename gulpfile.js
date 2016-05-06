/**
 *
 *  _____ _  _ ___      __  __
 * |_   _| || | __|    /  |/   \
 *   | | | >< | _|     `7 | // |
 *  _|_|_|_||_|___| __  |_|\__/  __ _______ __    _ ______  __   __ _______ __    _ _______ _______
 * |       |       |  |_|  |  |_|  |   _   |  |  | |      ||  |_|  |       |  |  | |       |       |
 * |       |   _   |       |       |  |_|  |   |_| |  _    |       |    ___|   |_| |_     _|  _____|
 * |       |  | |  |       |       |       |       | | |   |       |   |___|       | |   | | |_____
 * |      _|  |_|  |       |       |       |  _    | |_|   |       |    ___|  _    | |   | |_____  |
 * |     |_|       | ||_|| | ||_|| |   _   | | |   |       | ||_|| |   |___| | |   | |   |  _____| |
 * |_______|_______|_|   |_|_|   |_|__| |__|_|  |__|______||_|   |_|_______|_|  |__| |___| |_______|
 *                                                                    For Exceptional Developers, ..
 *
 * 2011-2016 Web Semantics, Inc.
 * All Rights Reserved.
 *
 * @link      http://ibuild.io
 * @link      http://websemantics.io
 * @author    Web Semantics, Inc. Dev Team <team@websemantics.io>
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.io>
 */

  var gulp      = require("gulp");
  var smart     = require("gulp-svg-smart");

  /* Load svg-smart resources */
  smart.load("smart.json", "package.json");

  // ---------------------------------------------------
  // TASK : default - require SVG SMARTs ..
  // ---------------------------------------------------
  gulp.task('default', ['svg-smart-tasks'],function() {

  });
