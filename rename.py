
import os
import shutil

mp = ["tvm","hhp", "qvt", "tat", "qd", "phc", "cl", "ls", "hq", "thaihao", "thienhoa", "thanhoang", "ac", "kc", "tl", "pq", "qv","ha"]

# for i in mp:
#     shutil.copyfile("class/char_backgrounds/tvm.jpg", "class/char_backgrounds/{}.jpg".format(i))



for index, item in enumerate(mp):
    str = """#chara0{} .video_bg **
        background: url(./{}.jpg) no-repeat center center;
        background-size: cover;
        **""".format(index+1,item)
    print(str)



