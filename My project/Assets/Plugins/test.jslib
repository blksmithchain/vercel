mergeInto(LibraryManager.library, {
  Hello: async function () {
        try {
          const result = await wax.api.transact(
            {
              actions: [
                {
                  account: "farmersworld",
                  name: "noop",
                  authorization: [
                    {
                      actor: wax.userAccount,
                      permission: "active",
                    },
                  ],
                  data: {},
                },
              ],
            },
            {
              blocksBehind: 3,
              expireSeconds: 60,
            }
          );

          document.getElementById("response").innerHTML = "Success!";
        } catch (e) {
          document.getElementById("response").innerHTML = e.message;
        }
  },

  HelloString: function (str) {
    window.alert(UTF8ToString(str));
  },

  PrintFloatArray: function (array, size) {
    for (var i = 0; i < size; i++) console.log(HEAPF32[(array >> 2) + i]);
  },

  AddNumbers: function (x, y) {
    return x + y;
  },

  StringReturnValueFunction: function () {
    var returnStr = "bla";
    var bufferSize = lengthBytesUTF8(returnStr) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(returnStr, buffer, bufferSize);
    return buffer;
  },
});
