# -*- coding: utf-8 -*-
from sirtrevor.blocks import BaseBlock


class FileBlock(BaseBlock):
    name = 'File'

    class Media:
        js = ['sirtrevor/blocks/file.js']

